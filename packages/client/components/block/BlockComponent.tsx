import {
    IBlockVM
} from "../../vms/interfaces/IBlockVM";
import {
    KeyBoardEvent
} from "../../actions/block-actions";

interface IProps {
    key: string
    block: IBlockVM;
    updateEvent: (props: KeyBoardEvent, id: string) => void
}

export const BlockComponent = ({block, updateEvent}: IProps) => {

        if(!block || !updateEvent)
            return(
                <div>
                    loading
                </div>
            )

    return (
        <>
            {block &&
                <div
                    onKeyDown={async (props) => updateEvent(props, block.id)}
                    className={"block-content"}
                    contentEditable={true}
                >{block.properties}</div>
                }
        </>
    );
};
