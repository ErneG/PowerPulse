interface StepsProps {
    children: string;
    subtext?: string;
    className?: string;
}

export default function Steps({
    children,
    subtext,
    className,
}: StepsProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center ${className}`}>
            <h2 className="text-2xl font-bold  text-primary lg:text-3xl">
                {children}
            </h2>
            {subtext && (
                <p className="text-lg  font-light text-muted-foreground lg:text-xl">
                    {subtext}
                </p>
            )}
        </div>
    );
}
