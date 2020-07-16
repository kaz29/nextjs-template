import { makeStyles } from '@material-ui/core'

type Props = {
  degree: number
}

export const useStyles = makeStyles({
  icon: (props: Props) => ({
    transform: `rotateZ(${(props.degree+180)%360}deg)`,
    marginRight: 8,
  }),
})
