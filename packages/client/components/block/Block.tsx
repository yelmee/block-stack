import React, {
    forwardRef,
    KeyboardEvent,
    useRef,
    useState
} from 'react'; // type-only import 추천
import {
    IBlock
} from "domains/src/dtos/interfaces/IBlock";
import CommandMenu
    from "./CommandMenu";

interface IProps {
    block: IBlock;
    onUpdate: ( field: string, value: any) => void;
    onCreate: () => void;
    onDelete: () => void;
    onFocusPrevious: () => void;
    onFocusNext: () => void;
    onUpdateBlockType: (value: any) => void;
}

export const Block = forwardRef<HTMLDivElement, IProps>(({block, onUpdate, onCreate, onDelete, onFocusPrevious, onFocusNext, onUpdateBlockType }, forwardedRef) => {
    const [content, setContent] = useState(block.content);
    const [searchQuery, setSearchQuery] = useState("");
    // const [currentType, setCurrentType] = useState<BlockType>("text");
    const [showCommandMenu, setShowCommandMenu] = useState(false);
    const [commandMenuPosition, setCommandMenuPosition] = useState({top: 0, left: 0});
    const localRef = useRef<HTMLDivElement>(null);

    // Merge the forwarded ref with our local one
    const ref = (node: HTMLDivElement | null) => {
        (localRef as React.RefObject<HTMLDivElement | null>).current = node
        if (typeof forwardedRef === 'function') {
            forwardedRef(node)
        } else if (forwardedRef) {
            (forwardedRef as React.RefObject<HTMLDivElement | null>).current = node
        }
    }

    const handleInput = (e: any) => {
        const text = e.currentTarget.textContent || '';

        if(text === '/' || text.endsWith(' /')){
            e.preventDefault()
            setShowCommandMenu(true)

            const rect = localRef?.current?.getBoundingClientRect()
            if(!rect) return;

            setCommandMenuPosition({top: rect.top + window.scrollX, left: rect.left + window.scrollY})
        } else if(showCommandMenu && text.includes('/')){
            e.preventDefault()
            const search = e.key.match('')
            setSearchQuery(search)
        } else {
            // setShowCommandMenu(false)
        }
        onUpdate('content', [text])
    }

    const handleCommandMenu = (type: string) => {
        if(showCommandMenu){
            const newContent = content[0].replace(/\/[^/]*$/, '').trim()
            setContent([newContent])
            onUpdate(newContent, "")
            onUpdateBlockType(type)
            setShowCommandMenu(false)
        }
    }
    
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>)=> {
        const text = e.currentTarget.textContent || '';
        // const type = ""

        if(e.key === 'Enter') {
            e.preventDefault()
            if(showCommandMenu) return;
            onCreate()
        }

        if (e.key === 'Backspace' && text.length === 0) {
            e.preventDefault()
            onDelete()
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault()
            onFocusPrevious()
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            onFocusNext()
        }
    }

    const getBlockStyle = () => {
        switch (block.type) {
            case 'heading1':
                return 'text-3xl font-bold'
            case 'heading2':
                return 'text-2xl font-bold'
            case 'heading3':
                return 'text-xl font-bold'
            case 'text':
                return 'font-mono bg-muted px-2 py-1 rounded'
            default:
                return ''
        }
    }


    return (
        <div
            className="group relative py-1 px-2 hover:bg-muted/50 rounded flex">

            {
                showCommandMenu &&
                <CommandMenu onSelect={handleCommandMenu} onClose={()=> setShowCommandMenu(false)} searchQuery={searchQuery} position={commandMenuPosition} />
            }
                {/* 드래그 핸들 (나중에 구현) */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        className="bg-red text-muted-foreground hover:text-foreground p-1"
                        aria-label="Drag handle"
                    >
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            className="fill-current"
                        >
                            <circle cx="2" cy="2" r="1.5" />
                            <circle cx="8" cy="2" r="1.5" />
                            <circle cx="2" cy="8" r="1.5" />
                            <circle cx="8" cy="8" r="1.5" />
                        </svg>
                    </button>
                </span>

            {block &&
                <span
                    className={`ml-3 outline-none min-h-[1.5rem] ${getBlockStyle()}`}
                    ref={ref}
                    suppressContentEditableWarning
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    contentEditable
                >{content}</span>
            }
        </div>
    );
})
