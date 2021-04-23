import Review from './components/Review'
import './styles/global.module.scss'

import { Title } from './components/Title'

function App() {
  return (
    <main>
      <Title hasBorderBottom={true} title='Our Reviews' />
      <Review />
    </main>
  )
}

export default App
