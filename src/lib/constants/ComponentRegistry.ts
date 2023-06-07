import type { ModalComponent } from "@skeletonlabs/skeleton/index";
import AddServerModal from "../components/modals/AddServerModal.svelte";
import StopInstanceModal from "../components/modals/StopInstanceModal.svelte";
import AddInstanceModal from "../components/modals/AddInstanceModal.svelte";
import StartInstanceModal from "../components/modals/StartInstanceModal.svelte";
import DeleteInstanceModal from "../components/modals/DeleteInstanceModal.svelte";

// List of modal components
export const ModalComponentRegistry: Record<string, ModalComponent> = {
    addServerModal: { ref: AddServerModal },
    createInstanceModal: { ref: AddInstanceModal },
    stopInstanceModal: { ref: StopInstanceModal },
    startInstanceModal: { ref: StartInstanceModal },
    deleteInstanceModal: { ref: DeleteInstanceModal },
};

// Component names for reference
export const ModalComponentNames = {
    addServerModal: "addServerModal",
    createInstanceModal: "createInstanceModal",
    startInstanceModal: "startInstanceModal",
    stopInstanceModal: "stopInstanceModal",
    deleteInstanceModal: "deleteInstanceModal",
};