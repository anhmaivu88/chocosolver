package org.clafer.ir;

import org.chocosolver.solver.constraints.Constraint;
import org.chocosolver.solver.variables.IntVar;
import org.clafer.ir.IrQuickTest.Solution;
import static org.clafer.ir.Irs.sort;
import static org.clafer.ir.Irs.sortStrict;
import org.clafer.test.NonEmpty;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 *
 * @author jimmy
 */
@RunWith(IrQuickTest.class)
public class IrSortTest {

    @Test(timeout = 60000)
    public IrBoolExpr setup(@NonEmpty IrIntVar[] ints, boolean strict) {
        return strict ? sortStrict(ints) : sort(ints);
    }

    @Solution
    public Constraint setup(IntVar[] ints, boolean strict) {
        if (ints.length == 1) {
            return ints[0].getModel().trueConstraint();
        }
        Constraint[] sorted = new Constraint[ints.length - 1];
        for (int i = 0; i < sorted.length; i++) {
            sorted[i] = ints[0].getModel().arithm(ints[i], strict ? "<" : "<=", ints[i + 1]);
        }
        return ints[0].getModel().and(sorted);
    }
}
