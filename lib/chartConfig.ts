export const getChartConfig = (height: number, showTime: boolean) => ({
  layout: {
    background: { color: 'transparent' },
    textColor: '#9ca3af',
  },
  grid: {
    vertLines: { color: 'rgba(139, 92, 246, 0.1)' },
    horzLines: { color: 'rgba(139, 92, 246, 0.1)' },
  },
  crosshair: {
    mode: 1,
  },
  rightPriceScale: {
    borderColor: 'rgba(139, 92, 246, 0.2)',
  },
  timeScale: {
    borderColor: 'rgba(139, 92, 246, 0.2)',
    timeVisible: showTime,
    secondsVisible: false,
  },
  height,
})