import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import SaveShareLogo from "~/images/savesharelogo.png"

const Header = ({ setOpenModal }) => {
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className="mx-2 text-lg w-40 mb-4" to="/">
          <img src={SaveShareLogo} alt="strapi catalog logo" />
        </Link>
        <div className="flex flex-col items-center md:flex-row">
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/">
            Categorias
          </Link>
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/products">
            Imóveis
          </Link>
          <button
            className="mx-2 mb-2 md:mb-0 text-lg"
            onClick={() => setOpenModal(true)}
          >
            Buscar
          </button>
        </div>
      </div>
      <hr className="mt-6 m-auto w-24 border-t-4" />
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
