// @flow
import * as React
    from 'react';
import {
    useEffect,
    useMemo,
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
    { type: 'text', label: 'Text', description: 'Plain text', icon: '📝' },
    { type: 'heading1', label: 'Heading 1', description: 'Big section heading', icon: 'H1' },
    { type: 'heading2', label: 'Heading 2', description: 'Medium section heading', icon: 'H2' },
    { type: 'heading3', label: 'Heading 3', description: 'Small section heading', icon: 'H3' },
    { type: 'bulletList', label: 'Bullet List', description: 'Simple bullet list', icon: '•' },
    { type: 'numberedList', label: 'Numbered List', description: 'Numbered list', icon: '1.' },
    { type: 'todo', label: 'To-do', description: 'Track tasks', icon: '☐' },
    { type: 'code', label: 'Code', description: 'Code snippet', icon: '</>' },
]

export default function CommandMenu({onClose, onSelect, position, searchQuery}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const menuRef = useRef<HTMLDivElement>(null)

    const filteredBlockType = useMemo(
        () =>
            COMMAND_MENU_TYPE.filter(
                cmt =>
                    cmt.type.toLocaleLowerCase().includes(searchQuery) ||
                    cmt.description.toLocaleLowerCase().includes(searchQuery)
            ),
        [searchQuery]
    )

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSelectedIndex(prev =>
                    Math.min(prev + 1, Math.max(filteredBlockType.length - 1, 0))
                )
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSelectedIndex(prev => Math.max(prev - 1, 0))
            } else if (e.key === 'Enter') {
                e.preventDefault()
                e.stopPropagation()
                if (!filteredBlockType[selectedIndex]) return
                onSelect(filteredBlockType[selectedIndex].type)
            } else if (e.key === 'Escape') {
                e.preventDefault()
                onClose()
            }
        }
        document.addEventListener('keydown', handleKeydown, true)
        return () => document.removeEventListener('keydown', handleKeydown, true)
    }, [selectedIndex, filteredBlockType, onSelect, onClose])

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
                        <span>{cmt.icon}</span>
                        <span>{cmt.label}</span>
                    </div>)
            }

        </div>
    );
};