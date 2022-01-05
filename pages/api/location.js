import data from "../../data.json"

export default function handler(req, res) {
	console.log(req.query)
	const { search } = req?.query

	const removeDuplicates = data?.filter(
		(value, index, self) => index === self.findIndex((t) => t.id === value.id && t.lat === value.lat)
	)

	let filtered = removeDuplicates?.filter((x) => x.formatted?.toLowerCase()?.includes(search?.toLowerCase()))
	res.status(200).json({ data: filtered })
}
