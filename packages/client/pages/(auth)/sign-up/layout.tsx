import React
    from "react";

export default function Layout(props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {


    return (
        <div className="flex min-h-screen items-center justify-center">
            {props.children}
        </div>
    );
}
