import { useUser } from '@clerk/clerk-react'

function GetUserId() {
  const { isSignedIn, user } = useUser();
  if(!isSignedIn) {
    return null;
  }
  return user?.id
}

export default GetUserId
