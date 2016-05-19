import React from 'react'

import Header from '../Header/Header'
import Navbar from 'components/Navbar/Navbar'
import ActionButton from '../ActionButton/ActionButton'
import EditorImage from '../EditorImage/EditorImage'
import EditorAttributes from '../EditorAttributes/EditorAttributes'
import Footer from 'components/Footer/Footer'

const Home = () =>
  <div>
    <Header>
      <Navbar textColor="white" />
    </Header>

    <ActionButton />
    <EditorImage />
    <EditorAttributes />

    <Footer>
      <i>
        Icons made by <a style={{ color: 'inherit' }} href="http://www.freepik.com" title="Freepik" target="_blank"> Freepik</a>
      </i>
    </Footer>
  </div>

export default Home;
