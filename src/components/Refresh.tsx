"use client"

import Button from "./Button"

export default function Refresh(){
  return(
    <Button onClick={() => window.location.reload()}/>
  )
}