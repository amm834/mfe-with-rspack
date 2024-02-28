import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'


const Button = React.lazy(() =>
    import("remote/Button").catch(() => {
        return {default: () => <>Component unavailable!</>};
    })
);
const App = () => (

    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: host</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
        <Button>
            Aung Myat Moe
        </Button>
        <div>
        </div>
    </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App/>)
