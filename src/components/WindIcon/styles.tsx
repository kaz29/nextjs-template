import { makeStyles } from '@material-ui/core'
import { getWindIconDegree } from '~/utils/weather'

type Props = {
  degree: number
}

export const useStyles = makeStyles({
  icon: (props: Props) => ({
    transform: `rotateZ(${getWindIconDegree(props.degree)}deg)`,
    marginRight: 8,
  }),
})
