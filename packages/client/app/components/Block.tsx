import {
    IBlockVM
} from "@app/vms/interfaces/IBlockVM";
import {
    KeyBoardEvent
} from "@app/hooks/useBlockTree";

interface IProps {
    block: IBlockVM;
    event: (props: KeyBoardEvent) => void
}

export const BlockComponent = ({block, event}: IProps) => {

    return (
        <>
                        <div
                            onKeyDown={event}
                            className={"block-content"}
                            contentEditable={true}
                        >{block.properties}</div>
                    )
        </>
    );
};
