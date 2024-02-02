const getFullYear = () => {
  return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export { getFullYear, getFooterCopy };
