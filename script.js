const loadReviews = () => {
    console.log("loading reviews");
    const container = document.querySelector("#reviews-list")

    for (const review of reviews) {
        const el = createReviewElement(review);
        container.appendChild(el);
    }
}

const handleReviewSubmit = () => {
    console.log("handleReviewSubmit Called!")
}

document.addEventListener("DOMContentLoaded", loadReviews);

const createReviewElement = (review) => {
    console.log(review);
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-item';
    reviewElement.innerHTML = `
    <p class="book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button>Reposts (${review.reposts})</button>
    <button>Likes (${review.likes})</button>`;
    return reviewElement;
}

