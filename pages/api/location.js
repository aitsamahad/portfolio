import jsonData from "../../data.json"
import axios from "axios"

axios.defaults.headers.common["uid"] = `f43d931d1eee42f1b84036006918e80f`

export default async function handler(req, res) {
	console.log(req.query)
	res.header("Access-Control-Allow-Origin", "*")
	const { search } = req?.query

	const removeDuplicates = jsonData?.filter(
		(value, index, self) => index === self.findIndex((t) => t.id === value.id && t.lat === value.lat)
	)

	let filtered = removeDuplicates?.filter((x) => x.formatted?.toLowerCase()?.includes(search?.toLowerCase()))

	const { status, data } = await axios.get(
		`https://dispatch-backend-v2.herokuapp.com/api/icabbi/search-address/?query=${search?.toLowerCase()}`
	)

	let response = data ?? filtered

	res.status(200).json({ data: response })
}
