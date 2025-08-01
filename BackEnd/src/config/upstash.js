import {Ratelimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();
// allow the rateLimiter that allow

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "100 s"),

});
export default ratelimit;