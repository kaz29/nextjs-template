import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '@material-ui/core/Button'
import { SnackbarProvider, useSnackbar } from 'notistack'

type ButtonProps = {
  variant: 'default' | 'error' | 'success' | 'warning' | 'info'
  message: string
}

type Props = {
  button: ButtonProps
}

const AddSnackButton: React.FC<Props> = ({
  button,
}) => {
  const { enqueueSnackbar } = useSnackbar()

  return (
    <div style={{marginBottom: 16}}>
      <Button
        key={button.variant}
        variant={'contained'}
        color={'inherit'}
        onClick={() => {
          enqueueSnackbar(button.message, { variant: button.variant })
        }}
        >
        {`Show ${button.variant}`}
      </Button>
    </div>
  )
}

const buttons: ButtonProps[] = [
  { variant: 'success', message: 'Successfully done the operation.' },
  { variant: 'error', message: 'Something went wrong.' },
  { variant: 'warning', message: 'Be careful of what you just did!' },
  { variant: 'info', message: 'For your info...' },
]

storiesOf('material-ui/Notisnack', module)
  .add('default', () => {
    return (
      <SnackbarProvider
        maxSnack={4}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {
          buttons.map((button, index) => (
            <AddSnackButton
              key={`button-${index}`}
              button={button}
            />
          ))
        }
      </SnackbarProvider>
    )
  })
