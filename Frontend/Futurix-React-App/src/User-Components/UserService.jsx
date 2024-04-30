import "./user.css";

function UserService() {
  return (
    <section className="service-section container mx-auto h-[70vh]">
      <h2>Service Coming Soon...</h2>
      <div className="tiles">
        <article className="tile">
          <div className="tile-header">
            <i className="ph-lightning-light"></i>
            <h3>
              <span>Electricity</span>
              <span>UGVCL.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article className="tile">
          <div className="tile-header">
            <i className="ph-fire-simple-light"></i>
            <h3>
              <span>Gas</span>
              <span>Sabarmati Gas</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article className="tile">
          <div className="tile-header">
            <i className="ph-file-light"></i>
            <h3>
              <span>Tax online</span>
              <span>Gst.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span className="icon-button">
              <i className="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
      </div>
      <div className="service-section-footer">
        <p>
          Services are paid according to the current state of the currency and
          tariff.
        </p>
      </div>
    </section>
  );
}

export default UserService;
