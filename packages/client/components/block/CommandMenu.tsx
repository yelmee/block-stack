// @flow
import * as React
    from 'react';
import {
    useEffect,
    useRef,
    useState
} from 'react';

type Props = {
    onSelect: (type: string) => void;
    onClose: () => void;
    searchQuery: string,
    position: {top: number, left: number}
};

const COMMAND_MENU_TYPE = [
    {icon: "H1", description: "", type: "heading1", label: "제목1"},
    {icon: "📝", description: "", type: "text", label: "내용"}
]
export default function CommandMenu({onClose, onSelect, position, searchQuery}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const menuRef = useRef<HTMLDivElement>(null)

    const filteredBlockType = COMMAND_MENU_TYPE.filter(cmt => cmt.type.toLocaleLowerCase().includes(searchQuery) || cmt.description.toLocaleLowerCase().includes(searchQuery))

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent)=>{
            if(e.key === "ArrowDown"){
                e.preventDefault()
                setSelectedIndex(prev => Math.min(prev + 1, filteredBlockType.length - 1 ))
            } else if(e.key === "ArrowUp"){
                e.preventDefault()
                setSelectedIndex(prev => Math.max(prev - 1, 0))
            } else if(e.key === "Enter"){
                e.preventDefault()
                if(!filteredBlockType[selectedIndex]) return;
                onSelect(filteredBlockType[selectedIndex].type)
            } else if(e.key === "Escape"){
                e.preventDefault()
                onClose()
            }
        }
        document.addEventListener("keydown", handleKeydown)
        return () => document.removeEventListener("keydown", handleKeydown)
    }, [selectedIndex, filteredBlockType]);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if(!e.target) return;
            if(menuRef.current && !menuRef.current.contains(e.target as Node)){
                onClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, []);


    return (
        <div
            className="fixed z-50 bg-popover border rounded-md shadow-lg w-80 max-h-80 overflow-y-auto"

            style={{
                top: position.top,
                left: position.left
            }}>
            {
                filteredBlockType.map((cmt, index) =>
                    <div
                        className={`
                           w-full flex items-center gap-3 px-3 py-2 rounded-sm
                            text-left transition-colors
                            ${index === selectedIndex
                            ? 'bg-red-500 text-accent-foreground '
                            : 'hover:bg-accent/50'
                        }`}
                        onClick={() => onSelect(cmt.type)}
                        ref={menuRef}
                        key={cmt.type}
                    >
                        selectedIndex{selectedIndex}
                        index{index}
                        <span>{cmt.icon}</span>
                        <span>{cmt.label}</span>
                        <span>{cmt.description}</span>
                    </div>)
            }

        </div>
    );
};