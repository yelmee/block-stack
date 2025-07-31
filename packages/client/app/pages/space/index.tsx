"use client"
import React
    from "react";
import {
    useAuth
} from "@app/hooks/useAuth";
import {
    BlockTreeComponent
} from "@app/components/BlockTree";
import TextWithIcon
    from "@app/components/TextWithIcon";

export default function Space() {
    const {user} = useAuth()

    return (
        <div
            className="sidebar bg-zinc-600">
            <h2>Sidebar</h2>
            {user &&
                <TextWithIcon
                    name={user.id + " 의 프로젝트"}
                    char={user.id}
                />}
            <BlockTreeComponent/>
        </div>
    )
}
