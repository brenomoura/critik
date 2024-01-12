import React, { CSSProperties } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface StyledLinkProps extends LinkProps {
  color?: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ to, children }) => {
  const customStyles: CSSProperties = {
    color: "inherit",
    textDecoration: "inherit"
  };

  return (
    <Link to={to} style={customStyles}>
      {children}
    </Link>
  );
};

export default StyledLink;
