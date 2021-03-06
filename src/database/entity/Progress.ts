import { Column } from 'typeorm';

import { Activities } from '../../models';

class Progress implements Activities {
    @Column({ default: false })
    reading: boolean;

    @Column({ default: false })
    writing: boolean;

    @Column({ default: false })
    submission: boolean;

    // @Column({ default: false })
    // teamReview: boolean;

    // @Column({ default: false })
    // randomReview: boolean;

    // @Column({ default: false })
    // results: boolean;
}

export { Progress };
