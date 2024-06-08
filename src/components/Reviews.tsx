import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
function Reviews() {
  return (
    <section className="mt-14">
      <h2 className="text-4xl mb-4 font-bold text-center">
        Hear what they said
      </h2>
      <section className="grid grid-cols-2 gap-y-12">
        <article className="border-solid border-2 px-4 py-6 max-w-[25rem] rounded-md">
          <div className="flex mb-2 gap-x-4 capitalize">
            <img
              src={user1}
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4>arnav james</h4>
              <p>
                <span className="text-sm">
                  June 19,2021 | Lorem ipsum dolor sit amet.
                </span>
              </p>
            </div>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
          assumenda, modi tempora debitis, architecto vitae voluptates corporis
          sunt alias adipisci ipsum expedita sed amet pariatur.
        </article>

        <article className="border-solid border-2 px-4 py-6 max-w-[25rem] rounded-md">
          <div className="flex mb-2 gap-x-4 capitalize">
            <img
              src={user2}
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4>arnav james</h4>
              <p>
                <span className="text-sm">
                  June 19,2021 | Lorem ipsum dolor sit amet.
                </span>
              </p>
            </div>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
          assumenda, modi tempora debitis, architecto vitae voluptates corporis
          sunt alias adipisci ipsum expedita sed amet pariatur.
        </article>
        <article className="border-solid border-2 px-4 py-6 max-w-[25rem] rounded-md">
          <div className="flex mb-2 gap-x-4 capitalize">
            <img
              src={user2}
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4>arnav james</h4>
              <p>
                <span className="text-sm">
                  June 19,2021 | Lorem ipsum dolor sit amet.
                </span>
              </p>
            </div>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
          assumenda, modi tempora debitis, architecto vitae voluptates corporis
          sunt alias adipisci ipsum expedita sed amet pariatur.
        </article>
        <article className="border-solid border-2 px-4 py-6 max-w-[25rem] rounded-md">
          <div className="flex mb-2 gap-x-4 capitalize">
            <img
              src={user2}
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4>arnav james</h4>
              <p>
                <span className="text-sm">
                  June 19,2021 | Lorem ipsum dolor sit amet.
                </span>
              </p>
            </div>
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
          assumenda, modi tempora debitis, architecto vitae voluptates corporis
          sunt alias adipisci ipsum expedita sed amet pariatur.
        </article>
      </section>
    </section>
  );
}
export default Reviews;
