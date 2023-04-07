import { ReactNode, forwardRef } from "react"

import { GroupProps } from "@react-three/fiber"

interface ObjectGroupProps extends GroupProps {
  children: ReactNode
}

export const ObjectGroup = forwardRef(
  ({ children, ...props }: ObjectGroupProps, ref: any) => (
    <group ref={ref} {...props}>
      {children}
    </group>
  )
)
