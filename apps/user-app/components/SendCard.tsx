"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2ptrasnfer";
export default function SendCard() {
    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState(0)
    return(
       <div className="h-[90vh] flex justify-center">
        <Center>
            <Card title="SEND">
            <div className="min-w-60 pr-5">
            <TextInput label={"Number"} placeholder={"Number"} onChange={(val) => {
            setNumber(val)
        }} />
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={(val) => {
            setAmount(Number(val))
        }} />
        <div className="flex justify-center pt-2">
        <Button pt-10 onClick={ async () => {
                await p2pTransfer(number, amount * 100)
        }}>
            Send
        </Button>
        </div>
        </div>
        </Card>
        </Center>
       </div>
    )

}