import passport from 'passport'
import model from '../models/index.js'
import pkg from 'passport-jwt'
const opts = {
    jwtFromRequest: pkg.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
    jsonWebTokenOptions: {
        maxAge: process.env.MAXAGE
    }
}

const customJwtStrategy = new pkg.Strategy(opts, async function(jwt_payload, next) {

    const user = await model.Customer.findByPk(jwt_payload.id)

    if (user) {
        next(null, user)
    } else {
        next(null, false)
    }
})

passport.use(customJwtStrategy)

export { opts as jwtOptions }

export default passport