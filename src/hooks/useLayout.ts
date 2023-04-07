import { useThree } from "@react-three/fiber"

export const useLayout = () => {
  const { viewport, size } = useThree()
  const mobile = size.width < 767
  const blockWidth = mobile ? size.width : size.width / 2
  const marginTimes = mobile ? 1.4 : 8
  const left = !mobile ? -viewport.width / 4 : 0
  const right = !mobile ? viewport.width / 4 : 0

  return {
    blockWidth,
    marginTimes,
    left,
    right,
  }
}
