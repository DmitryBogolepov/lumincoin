
export class Expenses {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.initDeleteButtons();
    }

    initDeleteButtons() {
        document.addEventListener("click", (event) => {
            const deleteButton = event.target.closest(".delete-btn");
            if (deleteButton) {
                event.preventDefault();
                this.currentDeleteTarget = deleteButton.closest(".action-card");
                const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
                deleteModal.show();
            }
        });
        document.getElementById("confirmDelete").addEventListener("click", () => {
            if (this.currentDeleteTarget) {
                this.currentDeleteTarget.remove();
            }
            const modalElement = document.getElementById("deleteModal");
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        });
    }
}