const getYouTubeID = (url: string) => {
  let ID = ''
  const regexSplit = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  if (regexSplit[2] !== undefined) {
    ID = regexSplit[2].split(/[^0-9a-z_\-]/i)[0]
  }
  else {
    ID = url
  }
  return ID
}

export default getYouTubeID