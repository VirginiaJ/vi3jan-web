import { ReactNode } from "react"

import { Html } from "@react-three/drei"
import { HtmlProps } from "@react-three/drei/web/Html"

interface ParagraphProps extends HtmlProps {
  children: ReactNode
}

export const HtmlTextBlock = ({ children, ...props }: ParagraphProps) => (
  <Html transform {...props}>
    {children}
  </Html>
)
