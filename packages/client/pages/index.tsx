// app/landing/page.tsx
export default function Landing() {
    return (
        <div className="min-h-screen">
            <header>
                <h3>Block Editor</h3>
                <p>Notion-style collaborative editor</p>
            </header>

            <section>
                {/*<img src="/demo.gif" alt="Demo" />*/}
                <a href="/space/2323">Try it now →</a>
            </section>

            {/*<section>*/}
            {/*    <h2>Features</h2>*/}
            {/*    <ul>*/}
            {/*        <li>Real-time collaboration</li>*/}
            {/*        <li>Drag & Drop</li>*/}
            {/*        <li>Slash commands</li>*/}
            {/*    </ul>*/}
            {/*</section>*/}
        </div>
    )
}