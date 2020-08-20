import React, { useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import styled from "styled-components"
import MoreVertIcon from "@material-ui/icons/MoreVert"

const MenuButton = () => {
  const [showMenu, isShownMenu] = useState(false)

  const open = () => {
    isShownMenu({ showMenu: true })
  }

  return (
    <div>
      <IconButton onClick={open}>
        <MoreVertIcon />
      </IconButton>

      <Menu>
        <button>edit</button>
        <button>remove</button>
      </Menu>
    </div>
  )
}

// if(this.state) {
//   open();
// } else {
//   close();
// }
// }

export default MenuButton
const Menu = styled.div``
