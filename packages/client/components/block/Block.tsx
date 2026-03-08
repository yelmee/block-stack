import {
    forwardRef,
    KeyboardEvent,
    Ref,
    useState
} from 'react'; // type-only import 추천
import {
    IBlock
} from "domains/src/dtos/interfaces/IBlock";

interface IProps {
    block: IBlock;
    onUpdate: ( field: string, value: any) => void;
    onCreate: () => void;
    onDelete: () => void;
    onFocusPrevious: () => void;
    onFocusNext: () => void;
}

export const Block = forwardRef(function ({block, onUpdate, onCreate, onDelete, onFocusPrevious, onFocusNext }:IProps, ref: Ref<HTMLDivElement> | undefined
){
    const [content, setContent] = useState(block.content);
    // // const inputRef = useRef<HTMLDivElement>(null);

    const handleInput = (event: any) => {
        const text = event.currentTarget.textContent || '';
        // setContent(text)
        onUpdate('content', [text])
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>)=> {
        const text = e.currentTarget.textContent || '';

        if(e.key === 'Enter') {
            e.preventDefault()
            onCreate()
        }

        if (e.key === 'Backspace' && text.length === 0) {
            e.preventDefault()
            onDelete()
        }

        console.log(e.key,'e.key')
        if (e.key === 'ArrowUp') {
            console.log('arrowUp')
            // const selection = window.getSelection()

            // if(selection && selection.rangeCount )

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
            case 'code':
                return 'font-mono bg-muted px-2 py-1 rounded'
            default:
                return ''
        }
    }


    return (
        <div
            className="group relative py-1 px-2 hover:bg-muted/50 rounded flex">
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
