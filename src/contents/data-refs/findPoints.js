export function findPoints(mode, count) {
  let pts = ''
  let currentAngle = Math.floor(Math.random() * 180)
  let toCount = mode === 'points' ? count * 2 : count
  let angleStep = (Math.PI * 2) / toCount

  for (let i = 0; i < toCount; i++) {
    let multiplier = mode === 'points' && i % 2 === 0 ? 30 : 150

    let ptx = 150 + Math.cos(currentAngle) * multiplier
    ptx = Math.round(ptx * 100) / 100

    let pty = 150 + Math.sin(currentAngle) * multiplier
    pty = Math.round(pty * 100) / 100

    pts = pts.concat(`${ptx} ${pty}`)
    if (i < toCount - 1) pts = pts.concat(', ')
    currentAngle += angleStep
  }

  return pts
}
