import { Stack } from 'react-bootstrap'

function Welcome() {
  return (
    <Stack gap={3} className='text-center'>
        <h3>Welcome to Movie Collector</h3>
        <p>Here, you can create a list of all your favorite movies! I started you off with some of my favorite movies. You can <b>click</b> on a movie to delete it from the list. Search some of your favorite movies and start adding. </p>
    </Stack>
  )
}

export default Welcome