/* global process */
import { GoogleGenAI } from '@google/genai'

export default async function handler(req, res) {
	try {
		const { user_input } = req.body

		const apiKey = process.env.VITE_GOOGLE_GEN_AI_API_KEY
		const model = process.env.VITE_GOOGLE_GEN_AI_MODEL
		const predefinedPrompt = process.env.VITE_PREDIFINED_PROMPT

		if (!apiKey || !model || !predefinedPrompt) {
			return res
				.status(500)
				.json({ error: 'Missing environment variables.' })
		}

		const ai = new GoogleGenAI({ apiKey })

		const currentDate = new Date().toISOString().split('T')[0]
		const fullPrompt = `The current date is ${currentDate}. ${predefinedPrompt}${user_input}`

		const response = await ai.models.generateContent({
			model,
			contents: fullPrompt,
			config: {
				thinkingConfig: {
					thinkingBudget: 0,
				},
			},
		})

		const rawText = response.text
		const jsonString = rawText.replace(/```json\n|\n```/g, '').trim()

		let parsedData
		try {
			parsedData = JSON.parse(jsonString)
		} catch (error) {
			return res.status(500).json({
				error: error.message,
			})
		}

		return res.status(200).json(parsedData)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
