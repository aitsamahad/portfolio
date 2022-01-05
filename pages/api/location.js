import jsonData from "../../data.json"
import axios from "axios"
import Cors from "cors"
axios.defaults.headers.common["uid"] = `f43d931d1eee42f1b84036006918e80f`

const cors = Cors({
	methods: ["GET", "HEAD"],
})

function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result)
			}

			return resolve(result)
		})
	})
}

export default async function handler(req, res) {
	await runMiddleware(req, res, cors)
	console.log(req.query)

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
