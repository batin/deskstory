import React from "react"
import { AuthProvider } from "./src/components/context"

export const wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>
}
