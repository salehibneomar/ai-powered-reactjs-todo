export const defaultDateFormat = dateStr => {
	if (!dateStr) return ''
	const date = new Date(dateStr)
	if (isNaN(date.getTime())) return dateStr
	const day = date.getDate()
	const month = date.toLocaleString('en-US', { month: 'short' })
	const year = date.getFullYear()
	return `${day} ${month}, ${year}`
}
