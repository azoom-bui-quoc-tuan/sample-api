/**
 * @type {import('express').RequestHandler}
 */
const getPost = async(req, res, next) => {
    // req.post = await getPostById(req.params.postId)
    console.log('middleware')
    next()
}

/**
 * @type {import('express').RequestHandler}
 */
const verifyPermissionOnPost = async(req, res, next) => { next() }

export { getPost as middleware1, verifyPermissionOnPost as middleware2 }