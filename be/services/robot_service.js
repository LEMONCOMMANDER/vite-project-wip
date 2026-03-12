// this service will be something that contains the logic for all robots.
// any api call can then call this service - this service will handle the logic...

// slug: enpoint would look like robots/{id}/{slug} (in ruby - http_method robots/:id/:slug) - the slug is a dynamic thing. an exmaple: robots/{id}/left_arm
// the slug could be a query param or from the body of the request - 

// validation logic is handled at the endpoint (is my id real, is my slug real etc.) -> the logic lives in the service:
// robots service (class for robots) -> validation section that handles all validation checks and logic (can break out into smaller chunks)



// Robot service:
class RobotService {
  const validPieces = { ... };
  const isValidPiece = (piece) => {
    return validPieces[piece] ? true : false;
  };
}

// NOTE: lookup middleware + error handling - you can use a middleware to catch all errors globally thus keeping error handling logic in one place

// endpoint:
put /robot/{id}/{slug} // < this slug would be component part 
    const rob = RobotService.fetchRobot(id)
    if !rob
      404
    if !RobotService.isValidPieces(slug)
      proper error code#
       
    //...logic
    RobotService.update(rob)(leftArm: 'arm 1')
    //                                   ^ comes from a payload 


// this model serves to define what a robot is - all this file has is what attributes robot has, and what type that attribute is. it could also contain validation (required statement) for robots

// model 
class RobotModel {
  id: number,
  leftArm: armOjbect (isRequired),
  rightArm: armObject, //(not required unless specified)
  legs: legObject...
}
