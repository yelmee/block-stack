import {
    IBlockVM
} from "../../vms/interfaces/IBlockVM";
import type {
    KeyboardEvent
} from 'react'; // type-only import 추천
import {
    useRef,
    useState
} from "react";

interface IProps {
    block: IBlockVM;
    onUpdate: (blockId: string, field: string, value: any) => void;
}

export const Block = ({block, onUpdate}: IProps) => {
    const [content, setContent] = useState(block.properties);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleInput = (event: any) => {
        const text = event.currentTarget.textContent || '';
        setContent(text)
        onUpdate(block.id, 'content', [text])
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>)=> {

        if(e.key === 'Enter') {
            e.preventDefault()

            // TODO: 새 블록 생성
        }

        if (e.key === 'Backspace' && content === '') {
            e.preventDefault()

            // TODO: 블록 삭제
        }
    }


    return (
        <div
            className="group relative py-1 px-2 hover:bg-muted/50 rounded">

            {block &&
                <div
                    className="outline-none min-h-[1.5rem] block-content"
                    ref={inputRef}
                    suppressContentEditableWarning
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    contentEditable
                >{content}</div>
            }
        </div>
    );
};
