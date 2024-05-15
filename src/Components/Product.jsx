import React, { useState } from "react";

const Product = ({
  cart,
  setcart,
  toggle1,
  settoggle1,
  toggle2,
  settoggle2,
  toggle3,
  settoggle3,
  toggle4,
  settoggle4,
  toggle5,
  settoggle5,
  toggle6,
  settoggle6,
  toggle7,
  settoggle7,
  toggle8,
  settoggle8,
}) => {
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>

                {toggle1 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle1((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle1((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute top: 0.5rem; right: 0.5rem">
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                {toggle2 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle2((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle2((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute top: 0.5rem; right: 0.5rem">
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                {toggle3 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle3((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle3((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                {toggle4 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle4((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle4((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute top: 0.5rem; right: 0.5rem">
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>

                {toggle5 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle5((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle5((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>

                {toggle6 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle6((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle6((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute top: 0.5rem; right: 0.5rem">
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                {toggle7 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle7((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle7((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>

                {toggle8 ? (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-success outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart - 1);
                          settoggle8((prev) => !prev);
                        }}
                      >
                        Remove from cart
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href="#"
                        onClick={() => {
                          setcart(cart + 1);
                          settoggle8((prev) => !prev);
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
