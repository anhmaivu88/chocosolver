package org.clafer.ir;

import org.chocosolver.solver.constraints.Constraint;
import org.chocosolver.solver.variables.BoolVar;
import org.clafer.choco.constraint.Constraints;
import org.clafer.ir.IrQuickTest.Solution;
import static org.clafer.ir.Irs.or;
import org.clafer.test.NonEmpty;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 *
 * @author jimmy
 */
@RunWith(IrQuickTest.class)
public class IrOrTest {

    @Test(timeout = 60000)
    public IrBoolExpr setup(@NonEmpty IrBoolVar[] vars) {
        return or(vars);
    }

    @Solution
    public Constraint setup(BoolVar[] vars) {
        return Constraints.or(vars);
    }
}
