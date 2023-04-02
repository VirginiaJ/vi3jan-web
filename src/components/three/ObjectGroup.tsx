import { ReactNode } from "react"

import { GroupProps } from "@react-three/fiber"

interface ObjectGroupProps extends GroupProps {
  children: ReactNode
}

export const ObjectGroup = ({ children, ...props }: ObjectGroupProps) => (
  <group {...props}>{children}</group>
)
