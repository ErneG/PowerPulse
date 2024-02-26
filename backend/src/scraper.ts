require('dotenv').config();
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import { optimizeActionPlan } from './optimizer';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3008;

interface DataObject {
  hour: string;
  price: number;
  day: string;
}

interface ActionEntry {
  hour: string;
  day: string;
  electricity_price: number;
  action: string;
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.get('/fetch-prices', async (req, res) => {
  try {
    const url = 'https://www.e-cena.lv/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const tables = $('table');
    const data: DataObject[] = [];
    tables.each((i, table) => {
      const rows = $(table).find('tr').slice(1);
      const day = $('h4').eq(i).text().trim();
      rows.each((j, row) => {
        const hour = $(row).find('td').eq(1).text().trim();
        const price = parseFloat($(row).find('td').eq(0).text().trim());
        data.push({ hour, price, day });
      });
    });
    const optimizedPlan: ActionEntry[] = optimizeActionPlan(data);
    res.json(optimizedPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
