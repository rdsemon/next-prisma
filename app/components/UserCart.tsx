type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

type UserCartProp = {
  userInfo: User[];
};

export default function UserCart({ userInfo }: UserCartProp) {
  return (
    <div>
      <div>
        {userInfo.length === 0 ? (
          <p>NO user found</p>
        ) : (
          <div>
            {userInfo.map((user) => (
              <div key={user.id}>
                <h1>{user.name}</h1>
                <h6>{user.email}</h6>
                <p>{user.createdAt.toString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
