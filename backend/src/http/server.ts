import fastify from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";


import { getWeekPendingGoals } from "../functions/get-week-pending-goals";
import { createCompletitionsRoute } from "../routes/create-completitions";
import { createGoalRoute } from "../routes/create-goals";
import { getWeekSummaryRoute } from "../routes/get-week-summary";
import { getPendingGoalsRoute } from "../routes/get-pending-goals";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: '*',
})
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(createCompletitionsRoute)
app.register(createGoalRoute)
app.register(getPendingGoalsRoute)
app.register(getWeekSummaryRoute)

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server is running ");
	});
